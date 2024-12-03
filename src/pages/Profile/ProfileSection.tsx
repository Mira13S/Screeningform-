import { useState, useRef, useEffect } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import { Camera, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../../components/ui/button-variants";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";
import { BlockBlobClient } from "@azure/storage-blob";

const GET_USER = gql`
  query GetUser($id: Int!) {
    getUser(id: $id) {
      id
      name
      email
      profileImage
    }
  }
`;

const EDIT_USER_PROFILE = gql`
  mutation EditUserProfile(
    $id: Int!
    $name: String
    $email: String
    $profileImage: String
  ) {
    editUserProfile(
      id: $id
      name: $name
      email: $email
      profileImage: $profileImage
    ) {
      id
      name
      email
      profileImage
    }
  }
`;

const GENERATE_SAS_URL = gql`
  mutation GenerateSASURL($profileImage: String!) {
    generateSASURL(profileImage: $profileImage)
  }
`;

interface ProfileData {
  id: string;
  name: string;
  email: string;
  profileImage: string;
}

export default function ProfileSection() {
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  console.log("token :", localStorage.getItem("userID"));
  let user = localStorage.getItem("userID");
  const userID = parseInt(user, 10);

  const { data, loading, error } = useQuery(GET_USER, {
    variables: { id: userID },
  });

  const [profileData, setProfileData] = useState<ProfileData>({
    id: "",
    name: "",
    email: "",
    profileImage: "",
  });

  const [editUserProfile] = useMutation(EDIT_USER_PROFILE);
  const [generateSASURL] = useMutation(GENERATE_SAS_URL);

  useEffect(() => {
    if (data?.getUser) {
      setProfileData({
        id: data.getUser.id,
        name: data.getUser.name,
        email: data.getUser.email,
        profileImage: data.getUser.profileImage || "/placeholder.svg",
      });
    }
  }, [data]);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSaving(true);

    const formData = new FormData(e.currentTarget);
    const updatedName = formData.get("name") as string;
    const updatedEmail = formData.get("email") as string;

    try {
      let profileImageName = profileData.profileImage;

      if (selectedImage) {
        const fileName = selectedImage.name;

        // Step 1: Generate SAS URL
        const { data: sasData } = await generateSASURL({
          variables: { profileImage: fileName },
        });

        const sasUrl = sasData?.generateSASURL;
        if (!sasUrl) throw new Error("Failed to generate SAS URL");
        console.log("sasUrl" , sasUrl)

        // Step 2: Upload the file to Azure Blob Storage
        const fileArrayBuffer = await selectedImage.arrayBuffer();
        const blockBlobClient = new BlockBlobClient(sasUrl);
        await blockBlobClient.uploadData(fileArrayBuffer);

        profileImageName = sasUrl.split("?")[0]; // Use the blob URL without SAS token
        console.log("img : ", profileImageName)
      }

      // Step 3: Update user profile with new image URL
      await editUserProfile({
        variables: {
          id: profileData.id,
          name: updatedName,
          email: updatedEmail,
          profileImage: profileImageName,
        },
      });

      setProfileData((prev) => ({
        ...prev,
        name: updatedName,
        email: updatedEmail,
        profileImage: profileImageName,
      }));

      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setIsSaving(false);
    }
  };

  if (error) {
    console.log(error);
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading user data.</p>;

  return (
    <Card className="w-full max-w-md mx-auto bg-white shadow-md">
      <CardHeader className="border-b border-gray-200">
        <CardTitle className="text-2xl font-bold text-[#6366F1]">
          Profile
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <div className="h-24 w-24 rounded-full overflow-hidden bg-gray-200">
                <img
                  src={
                    selectedImage
                      ? URL.createObjectURL(selectedImage)
                      : profileData.profileImage
                  }
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {isEditing && (
                <div className="absolute bottom-0 right-0">
                  <Label
                    htmlFor="avatar-upload"
                    className={cn(
                      buttonVariants({ variant: "default", size: "icon" }),
                      "cursor-pointer",
                    )}
                  >
                    <Camera className="h-4 w-4" />
                  </Label>
                  <Input
                    id="avatar-upload"
                    type="file"
                    accept="image/*"
                    className="sr-only"
                    onChange={handleImageSelect}
                    ref={fileInputRef}
                  />
                </div>
              )}
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              {profileData.name}
            </h2>
          </div>

          {isEditing ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name" className="text-gray-700">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  defaultValue={profileData.name}
                  required
                  className="border-gray-300 focus:border-[#6366F1] focus:ring-[#6366F1]"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-gray-700">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  defaultValue={profileData.email}
                  required
                  className="border-gray-300 focus:border-[#6366F1] focus:ring-[#6366F1]"
                />
              </div>
              <div className="flex gap-2">
                <button
                  type="submit"
                  className={cn(buttonVariants({ variant: "default" }))}
                  disabled={isSaving}
                >
                  {isSaving ? (
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  ) : (
                    "Save Changes"
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsEditing(false);
                    setSelectedImage(null);
                  }}
                  className={buttonVariants({ variant: "outline" })}
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-700">Email</h3>
                <p className="text-gray-600">{profileData.email}</p>
              </div>
              <button
                onClick={() => setIsEditing(true)}
                className={buttonVariants({ variant: "default" })}
              >
                Edit Profile
              </button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}


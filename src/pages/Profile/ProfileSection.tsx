"use client";

import { useState, useRef } from "react";
import { Camera, Loader2, Upload } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../../components/ui/button-variants";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";

interface ProfileData {
  name: string;
  email: string;
  profileImageUrl: string;
}

export default function ProfileSection() {
  const [isEditing, setIsEditing] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [profileData, setProfileData] = useState<ProfileData>({
    name: "John Doe",
    email: "john@example.com",
    profileImageUrl: "/placeholder.svg",
  });

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleImageUpload = async () => {
    // if (!selectedImage) return;
    // try {
    //     setIsUploading(true);
    //     const baseUrl = "http://localhost:3600/";
    //     // Step 1: Fetch SAS URL from backend
    //     const { data } = await axiosInstance.post(`/upload-url`, {
    //         filename: selectedImage.name, // Sent as part of the request body
    //     });
    //     const { sasUrl } = data;
    //     // Step 2: Upload the file to Azure Blob Storage using the SAS URL
    //     await axios.put(sasUrl, selectedImage, {
    //         headers: {
    //             "x-ms-blob-type": "BlockBlob",
    //             "Content-Type": selectedImage.type,
    //         },
    //     });
    //     // Step 3: Update profile image URL
    //     const uploadedImageUrl = sasUrl.split("?")[0]; // Strip SAS token from the URL
    //     setProfileData((prev) => ({
    //         ...prev,
    //         profileImageUrl: uploadedImageUrl,
    //     }));
    //     setSelectedImage(null);
    // } catch (error) {
    //     console.error("Error uploading image:", error);
    // } finally {
    //     setIsUploading(false);
    // }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setProfileData({
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      profileImageUrl: profileData.profileImageUrl,
    });

    setIsEditing(false);
  };

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
                      : profileData.profileImageUrl
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
            {isEditing && selectedImage && (
              <button
                onClick={handleImageUpload}
                disabled={isUploading}
                className={cn(buttonVariants({ variant: "default" }), "mt-2")}
              >
                {isUploading ? (
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                ) : (
                  <Upload className="h-4 w-4 mr-2" />
                )}
                Upload Image
              </button>
            )}
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
              <div className="grid gap-2">
                <Label htmlFor="password" className="text-gray-700">
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter new password"
                  className="border-gray-300 focus:border-[#6366F1] focus:ring-[#6366F1]"
                />
              </div>
              <div className="flex gap-2">
                <button
                  type="submit"
                  className={buttonVariants({ variant: "default" })}
                >
                  Save Changes
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

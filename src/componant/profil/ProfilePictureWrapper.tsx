import React, { useRef, useCallback } from 'react';
import useUserStore from '@/store/useUsersStore';
import Image from 'next/image';
import IconUploadImage from '../../assets/icon-upload-image.svg';
import { ProfilePictureWrapperProps } from '@/types/types';

const MAX_IMAGE_DIMENSION = 1024;
const SUPPORTED_FORMATS = ['image/jpeg', 'image/png'];

/**
 * ProfilePictureWrapper allows users to upload and change their profile picture.
 * It handles file selection, validates the file type and dimensions, and updates the profile image.
 * @param {ProfilePictureWrapperProps} props - Properties for the ProfilePictureWrapper component.
 * @param {(file: File) => void} props.setFile - Function to set the selected image file.
 * @returns {JSX.Element} The rendered ProfilePictureWrapper component.
 */

const ProfilePictureWrapper: React.FC<ProfilePictureWrapperProps> = ({
  setFile,
}: ProfilePictureWrapperProps): JSX.Element => {
  const profile = useUserStore((state) => state.profile);
  const updateProfileLocal = useUserStore((state) => state.updateProfileLocal);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const havePicture = profile?.image;

  const textStyles = havePicture
    ? 'text-white absolute'
    : 'text-dark-purple absolute';
  const iconStyles = havePicture ? 'text-white' : 'text-dark-purple';

  const validateFile = (file: File) => {
    if (!SUPPORTED_FORMATS.includes(file.type)) {
      alert('Please upload an image in JPG or PNG format.');
      return false;
    }
    return true;
  };

  const handleImageClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleFileChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file && validateFile(file)) {
        const img = new window.Image();
        img.onload = () => {
          if (
            img.width <= MAX_IMAGE_DIMENSION &&
            img.height <= MAX_IMAGE_DIMENSION
          ) {
            setFile(file);
            updateProfileLocal({ image: URL.createObjectURL(file) });
          } else {
            alert(
              `Image dimensions should be less than ${MAX_IMAGE_DIMENSION}x${MAX_IMAGE_DIMENSION}px.`
            );
          }
          URL.revokeObjectURL(img.src);
        };
        img.src = URL.createObjectURL(file);
      }
    },
    [setFile, updateProfileLocal]
  );

  return (
    <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center sm:gap-16 gap-4 bg-background-white p-5 rounded-lg">
      <p className="w-[150px]">Profile picture</p>
      <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center content-center gap-6">
        <div
          className="flex flex-col justify-center items-center gap-2 w-[193px] min-w-[193px] min-h-[193px] bg-lightest-purple overflow-hidden cursor-pointer rounded-xl"
          onClick={handleImageClick}
          aria-label="Upload Profile Picture"
        >
          <div className="relative h-[193px] w-[193px] rounded-xl">
            <IconUploadImage
              className={`w-[40px] h-[40px] absolute top-[60px] left-[75px] z-10 ${iconStyles}`}
            />
            {havePicture && (
              <Image
                src={typeof profile.image === 'string' ? profile.image : ''}
                alt="Profile"
                width={193}
                height={193}
                className="absolute z-0 h-[193px] w-[193px] object-cover"
                priority
              />
            )}
            <p
              className={`font-semibold ${textStyles} top-[115px] left-[38px] z-2`}
            >
              {havePicture ? 'Change image' : 'Upload a picture'}
            </p>
          </div>
        </div>
        <p className="text-xs">
          Image must be below 1024x1024px. Use PNG or JPG format.
        </p>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
      </div>
    </div>
  );
};

export default ProfilePictureWrapper;

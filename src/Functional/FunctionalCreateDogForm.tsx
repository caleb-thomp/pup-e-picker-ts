import { useState } from "react";
import { Dog } from "../types";
import { dogPictures } from "../dog-pictures";

export const FunctionalCreateDogForm = ({
  addDog,
  isLoading,
}: {
  addDog: (dog: Omit<Dog, "id" | "isFavorite">) => void;
  isLoading: boolean;
}) => {
  const [nameInput, setNameInput] = useState("");
  const [descriptionInput, setDescriptionInput] =
    useState("");
  const [selectedImage, setSelectedImage] = useState(
    dogPictures.BlueHeeler
  );

  return (
    <form
      action=""
      id="create-dog-form"
      onSubmit={(e) => {
        e.preventDefault();
        addDog({
          name: nameInput,
          description: descriptionInput,
          image: selectedImage,
        });
        setDescriptionInput("");
        setNameInput("");
        setSelectedImage(dogPictures.BlueHeeler);
      }}
    >
      <h4>Create a New Dog</h4>
      <label htmlFor="name">Dog Name</label>
      <input
        type="text"
        value={nameInput}
        onChange={(e) => {
          setNameInput(e.target.value);
        }}
        disabled={isLoading}
      />
      <label htmlFor="description">Dog Description</label>
      <textarea
        name=""
        id=""
        cols={80}
        rows={10}
        value={descriptionInput}
        onChange={(e) => {
          setDescriptionInput(e.target.value);
        }}
        disabled={isLoading}
      ></textarea>
      <label htmlFor="picture">Select an Image</label>
      <select
        id=""
        onChange={(e) => {
          setSelectedImage(e.target.value);
        }}
      >
        {Object.entries(dogPictures).map(
          ([label, pictureValue]) => {
            return (
              <option
                value={pictureValue}
                key={pictureValue}
              >
                {label}
              </option>
            );
          }
        )}
      </select>
      <input
        type="submit"
        value="submit"
        disabled={isLoading}
      />
    </form>
  );
};

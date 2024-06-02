"use server";

async function uploadAction(formData: FormData) {
  const file = formData.get("file");
  if (file instanceof File) {
    const text = await file.text();

    return `File processed successfully`;
  }
  return "error";
}

export default uploadAction;

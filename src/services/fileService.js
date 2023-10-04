import { BASE_URL } from "./constants";

const uploadCatImage = async (formData) => {
  let res = await fetch(`${BASE_URL}images/upload`, {
    method: "POST",
    headers: {
      "x-api-key":"live_AsZ63LQ07ay0tKzMx667Ush1tygfi9fkupZdwt7p2tjURpMAPttFXCSs17AjwV2t",
    },
    body: formData,
  });
  console.log(res);
  return res.json();
};
export default uploadCatImage;

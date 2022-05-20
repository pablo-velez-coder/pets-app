import styles from './styles.module.scss';
import { useForm, SubmitHandler } from "react-hook-form";

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other"
}

interface IFormInput {
  name: String;
  genre: String;
  age: String;
  race: String;
  description: String;
  gender: GenderEnum;
}

export const UploadPetForm = () => {

    const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);
  return  <form onSubmit={handleSubmit(onSubmit)}>
      <label>Nombre</label>
      <input {...register("name")} />
      <label>Género</label>
      <input {...register("genre")} />
      <label>Edad</label>
      <input {...register("age")} />
      <label>Raza</label>
      <input {...register("race")} />
      <label>Descripción</label>
      <input {...register("description")} />
    </form>
};
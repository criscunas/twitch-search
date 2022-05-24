import './SearchForm.scss';
import {Button, TextField} from "@material-ui/core";
import * as Yup from "yup";
import { useFormik } from "formik";



export const SearchForm = () => {
  
  const searchSchema = Yup.object({
    streamer: Yup.string().required("Streamer Required"),
  });
  
  const formik = useFormik({
    validationSchema: searchSchema,
    initialValues: {
      streamer: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values)
      resetForm();
    },
  });

  return (
    <div className='search'>
      <h2 className= "search__header"> 
        Search a Twitch user.
      </h2>
      <form className='search__form' onSubmit={formik.handleSubmit} >
        <TextField 
        name='streamer'
        placeholder='Enter your twitch name'
        type = "text"
        onChange = {formik.handleChange}
        variant='outlined'
        size='small'
        fullWidth
        focused = {false}
        value={formik.values.streamer}
        error={
          formik.touched.streamer && Boolean(formik.errors.streamer)
        }
        helperText={formik.touched.streamer && formik.errors.streamer}
        />
        <div className='search__button'>
          <Button 
            variant='contained' 
            type = "submit" 
            size = "medium"
          >
          <p className = 'search__button_text'> Submit </p>
        </Button>
        </div>
      </form>
    </div>
  )
}
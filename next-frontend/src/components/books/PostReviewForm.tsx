import React from "react";
import {
  Input,
  FormControl,
  Box,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";

interface Props {}

const PostReviewForm = (props: Props) => {
  function validateName(value) {
    let error;
    if (!value) {
      error = "First Enter Review & then hit submit button.";
    } else {
      error = "Your review submitted.";
      console.log(value);
    }
    return error;
  }

  return (
    <Formik
      initialValues={{ review: "" }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props) => (
        <Form>
          <Field name="review" validate={validateName}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.review && form.touched.review}
              >
                <Input {...field} id="review" placeholder="Enter Your Review" />
                <FormErrorMessage>{form.errors.review}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default PostReviewForm;

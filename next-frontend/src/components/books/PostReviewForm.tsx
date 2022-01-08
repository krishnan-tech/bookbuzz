import React, { useState } from "react";
import {
  Input,
  FormControl,
  Box,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { post_review_api } from "../../allApi";
import { useRouter } from "next/router";

interface Props {}

const PostReviewForm = (props: Props) => {
  const router = useRouter();
  const { bookId } = router.query;

  return (
    <Formik
      initialValues={{ review: "" }}
      onSubmit={async (values, actions) => {
          const token = localStorage.getItem("token");

          const star = 3
          if (token != null) {
            let review = values.review;
            const body = {
              bookId,
              review,
              star
            };
            const user = await post_review_api(body);
            console.log(user);
            alert("Yor Review Submitted.")
            router.reload()
          } else {
            alert("Login to post review.");
          }
          actions.setSubmitting(false);
      }}
    >
      {(props) => (
        <Form>
          <Field name="review">
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

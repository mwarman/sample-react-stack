import { Form } from "formik";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

import ButtonBar from "../common/ButtonBar";
import Button from "../common/Button";
import InputField from "../common/InputField";

const TodoForm = ({ formik }) => {
  return (
    <Form>
      <div className="mt-4">
        <InputField
          name="title"
          label="Title"
          type="text"
          disabled={formik.isSubmitting}
        />
      </div>

      <div className="mt-4">
        <InputField
          name="userId"
          label="User"
          type="number"
          disabled={formik.isSubmitting}
        />
      </div>

      <ButtonBar className="mt-4">
        <Button
          variant="secondary"
          type="button"
          className="mr-4"
          disabled={formik.isSubmitting}
        >
          Cancel
        </Button>
        <Button variant="primary" type="submit" disabled={formik.isSubmitting}>
          {formik.isSubmitting ? (
            <div className="flex items-center">
              <ArrowPathIcon className="mr-2 h-5 w-5 animate-spin" />
              <span>Submitting...</span>
            </div>
          ) : (
            <span>Submit</span>
          )}
        </Button>
      </ButtonBar>
    </Form>
  );
};

export default TodoForm;

import { useNavigate } from "react-router-dom";
import { Form } from "formik";

import ButtonBar from "../common/ButtonBar";
import LoadingButton from "../common/LoadingButton";
import Button from "../common/Button";
import InputField from "../common/InputField";

const TodoForm = ({ formik, onCancel }) => {
  const navigate = useNavigate();

  const cancel = () => {
    onCancel && onCancel();
  };

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
          onClick={cancel}
        >
          Cancel
        </Button>
        <LoadingButton
          variant="primary"
          type="submit"
          disabled={formik.isSubmitting}
          isLoading={formik.isSubmitting}
        >
          Submit
        </LoadingButton>
      </ButtonBar>
    </Form>
  );
};

export default TodoForm;

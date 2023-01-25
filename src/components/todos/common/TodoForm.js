import { Form } from 'formik';

import ButtonBar from '../../common/ButtonBar';
import LoadingButton from '../../common/LoadingButton';
import Button from '../../common/Button';
import InputField from '../../common/forms/InputField';
import Label from '../../common/forms/Label';

const TodoForm = ({ formik, onCancel }) => {
  const cancel = () => {
    onCancel && onCancel();
  };

  return (
    <Form>
      <div>
        <Label htmlFor="title" className="sr-only">
          Title
        </Label>
        <InputField
          id="title"
          name="title"
          type="text"
          className="text-2xl"
          disabled={formik.isSubmitting}
        />
      </div>

      <ButtonBar className="mt-8 justify-end">
        {onCancel && (
          <Button
            variant="secondary"
            type="button"
            className="mr-4 w-32"
            disabled={formik.isSubmitting}
            onClick={cancel}
          >
            Cancel
          </Button>
        )}
        {formik.dirty && (
          <LoadingButton
            variant="primary"
            type="submit"
            className="w-32"
            disabled={formik.isSubmitting}
            isLoading={formik.isSubmitting}
          >
            Save
          </LoadingButton>
        )}
      </ButtonBar>
    </Form>
  );
};

export default TodoForm;

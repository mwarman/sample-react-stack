import { Form } from 'formik';

import ButtonBar from '../../common/buttons/ButtonBar';
import LoadingButton from '../../common/buttons/LoadingButton';
import Button from '../../common/buttons/Button';
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
        {onCancel && (
          <Button
            variant="secondary"
            type="button"
            className="ml-4 w-32"
            disabled={formik.isSubmitting}
            onClick={cancel}
          >
            Cancel
          </Button>
        )}
      </ButtonBar>
    </Form>
  );
};

export default TodoForm;

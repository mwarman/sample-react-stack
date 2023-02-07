import { Form } from 'formik';

import ButtonBar from '../../common/buttons/ButtonBar';
import LoadingButton from '../../common/buttons/LoadingButton';
import Button from '../../common/buttons/Button';
import InputField from '../../common/forms/InputField';
import TextareaField from '../../common/forms/TextareaField';
import SelectField from '../../common/forms/SelectField';
import Label from '../../common/forms/Label';

import { Priorities } from '../../../utils/constants';

const TodoForm = ({ formik, onCancel }) => {
  const cancel = () => {
    onCancel && onCancel();
  };

  return (
    <Form>
      <div className="mb-6">
        <Label htmlFor="summary">Summary</Label>
        <InputField
          id="summary"
          name="summary"
          type="text"
          className="text-2xl"
          maxLength="100"
          disabled={formik.isSubmitting}
        />
      </div>

      <div className="mb-6">
        <Label htmlFor="description">Description</Label>
        <TextareaField id="description" name="description" rows="6" maxLength="1000" />
      </div>

      <div className="mb-6 w-60">
        <Label htmlFor="priority">Priority</Label>
        <SelectField id="priority" name="priority" disabled={formik.isSubmitting}>
          {Priorities.map((priority) => (
            <option key={priority.code} value={priority.code}>
              {priority.value}
            </option>
          ))}
        </SelectField>
      </div>

      <div className="mb-6 w-60">
        <Label htmlFor="dueAt">Due</Label>
        <InputField id="dueAt" name="dueAt" type="date" disabled={formik.isSubmitting} />
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

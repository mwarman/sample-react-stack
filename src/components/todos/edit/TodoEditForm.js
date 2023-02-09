import { Form } from 'formik';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import ButtonBar from '../../common/buttons/ButtonBar';
import LoadingButton from '../../common/buttons/LoadingButton';
import Button from '../../common/buttons/Button';
import InputField from '../../common/forms/InputField';
import TextareaField from '../../common/forms/TextareaField';
import SelectField from '../../common/forms/SelectField';
import Label from '../../common/forms/Label';
import UserName from '../../users/UserName';

import { Priorities, Statuses } from '../../../utils/constants';

dayjs.extend(relativeTime);

const TodoForm = ({ formik, onCancel }) => {
  const cancel = () => {
    onCancel && onCancel();
  };

  return (
    <Form>
      <div className="grid grid-cols-1 gap-0 lg:grid-cols-3 lg:gap-12 2xl:grid-cols-4">
        <div className="lg:col-span-2 2xl:col-span-3">
          <div className="mb-4">
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

          <div className="mb-4">
            <Label htmlFor="description">Description</Label>
            <TextareaField id="description" name="description" rows="6" maxLength="1000" />
          </div>
        </div>

        <div>
          <div className="mb-4">
            <div className="mb-2 text-sm font-bold">Assignee</div>
            <div>
              <UserName accountId={formik.values.assignee} />
            </div>
          </div>

          <div className="mb-4 w-60">
            <Label htmlFor="status">Status</Label>
            <SelectField id="status" name="status" disabled={formik.isSubmitting}>
              {Statuses.map((status) => (
                <option key={status.code} value={status.code}>
                  {status.value}
                </option>
              ))}
            </SelectField>
          </div>

          <div className="mb-4 w-60">
            <Label htmlFor="priority">Priority</Label>
            <SelectField id="priority" name="priority" disabled={formik.isSubmitting}>
              {Priorities.map((priority) => (
                <option key={priority.code} value={priority.code}>
                  {priority.value}
                </option>
              ))}
            </SelectField>
          </div>

          <div className="mb-4 w-60">
            <Label htmlFor="dueAt">Due</Label>
            <InputField id="dueAt" name="dueAt" type="date" disabled={formik.isSubmitting} />
          </div>

          <div className="mb-4 text-sm">
            <div className="mb-2">
              Created {dayjs(formik.values.createdAt).format('MMMM D, YYYY [at] H:mm A')}
            </div>
            <div title={dayjs(formik.values.updatedAt).format('MMMM D, YYYY [at] H:mm A')}>
              Updated {dayjs(formik.values.updatedAt).fromNow()}
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 2xl:col-span-4">
          <ButtonBar className="mt-4 justify-end">
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
        </div>
      </div>
    </Form>
  );
};

export default TodoForm;
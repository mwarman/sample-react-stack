import { Form } from 'formik';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import ButtonBar from '../../common/buttons/ButtonBar';
import LoadingButton from '../../common/buttons/LoadingButton';
import Button from '../../common/buttons/Button';
import InputField from '../../common/forms/InputField';
import TextareaField from '../../common/forms/TextareaField';
import PriorityField from '../common/PriorityField';
import StatusField from '../common/StatusField';
import Label from '../../common/forms/Label';
import UserName from '../../users/UserName';
import DateTime from '../../common/dates/DateTime';
import DateTimeRelative from '../../common/dates/DateTimeRelative';

import { DateFormat } from '../../../utils/constants';

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
            <TextareaField
              id="description"
              name="description"
              rows="6"
              maxLength="1000"
              disabled={formik.isSubmitting}
            />
          </div>
        </div>

        <div>
          <div className="mb-4">
            <div className="mb-2 text-sm font-bold">Assignee</div>
            <div>
              <UserName accountId={formik.values.assigneeId} />
            </div>
          </div>

          <div className="mb-4 w-60">
            <Label htmlFor="statusCode">Status</Label>
            <StatusField id="statusCode" name="statusCode" disabled={formik.isSubmitting} />
          </div>

          <div className="mb-4 w-60">
            <Label htmlFor="priorityCode">Priority</Label>
            <PriorityField disabled={formik.isSubmitting} />
          </div>

          <div className="mb-4 w-60">
            <Label htmlFor="dueAt">Due</Label>
            <InputField id="dueAt" name="dueAt" type="date" disabled={formik.isSubmitting} />
          </div>

          <div className="mb-4 text-sm">
            <div className="mb-2">
              Created <DateTime date={formik.values.createdAt} format={DateFormat.DATETIME_LONG} />
            </div>
            <div>
              Updated{' '}
              <DateTimeRelative
                date={formik.values.updatedAt}
                titleFormat={DateFormat.DATETIME_LONG}
              />
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

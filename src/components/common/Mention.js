/**
 * The `Mention` React component.
 * @module components/common/Mention
 */

/**
 * The `Mention` component renders a styled user name that has been mentioned
 * within a context such as a comment or description.
 * @function
 * @param {Object} props The component properties.
 * @param {string} props.name The name displayed in the Mention.
 * @returns {JSXElement} JSX
 * @example
 * <Mention name="John Smith" />
 */
const Mention = ({ name }) => {
  return (
    <span className="rounded-full bg-blue/30 py-0.5 px-2 text-sm text-blue-dark dark:text-blue-light/70">
      @{name}
    </span>
  );
};

export default Mention;

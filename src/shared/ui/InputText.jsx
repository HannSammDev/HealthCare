import PropTypes from 'prop-types';

export const InputText = ({ label, error, id, placeholder = '', ...props }) => (
  <div className="mb-2">
    <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor={id}>
      {label}
    </label>
    <div
      className={`flex gap-2 rounded-2xl border bg-slate-50 px-3 py-2 shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 ${
        error ? 'border-red-500' : 'border-slate-200'
      }`}
    >
      <input
        id={id}
        placeholder={placeholder}
        className="flex-1 bg-transparent text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
        {...props}
      />
    </div>
  </div>
);

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

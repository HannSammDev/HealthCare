import PropTypes from 'prop-types';

const variants = {

  primary: 'bg-blue-600 hover:bg-blue-700 text-white',
  secondary: 'bg-white  text-slate-700 border border-slate-200 hover:bg-slate-50',
  success: 'bg-green-600 hover:bg-green-700 text-white',
  danger: 'bg-red-600 hover:bg-red-700 text-white',
  link: 'bg-transparent text-blue-600 hover:underline ',
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

export const Button = ({
  children,
  label = 'Button',
  variant = 'primary',
  size = 'md',
  type = 'button',
  loading = false,
  onClick,
  className = '',
  ...props
}) => (
  <button
    type={type}
    disabled={loading}
    aria-busy={loading}
    aria-label={label}
    onClick={onClick}
    className={`rounded-lg font-medium  transition-colors ${loading ? 'opacity-50 cursor-not-allowed' : ''} ${variants[variant] ?? variants.primary} ${sizes[size] ?? sizes.md} ${className}`.trim()}
    {...props}
  >
    {loading ? (
      <span className="inline-flex items-center gap-2">
        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
        </svg>
        {label}
      </span>
    ) : (
      <>
        {label}
        {children}
      </>
    )}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  type: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

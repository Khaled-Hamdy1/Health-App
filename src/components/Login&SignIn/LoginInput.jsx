/* eslint-disable react/prop-types */
export default function LoginInput({ value, setValue, placeholder }) {
  return (
    <input
      type="text"
      placeholder= {placeholder}
      required
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

/* eslint-disable react/prop-types */
export default function LoginInput({ value, setValue, placeholder , type = "text"}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      required
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

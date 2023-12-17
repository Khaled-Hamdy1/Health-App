/* eslint-disable react/prop-types */
import ProfileMenu from "./ProfileMenu";

export default function Header({ fullName}) {
  return (
    <div className="h-[30vh] bg-gradient-to-r from-sky-500 to-indigo-500 flex items-center">
      <ProfileMenu fullName={fullName} />
      <h1 className="text-4xl font-bold text-white ml-8">Hello, {fullName || 'Ragab El7arak'}</h1>
    </div>
  );
}

import ProfileMenu from "./ProfileMenu";

export default function Header() {
  return (
    <div className="h-[30vh] bg-gradient-to-r from-sky-500 to-indigo-500 flex items-center">
      <ProfileMenu />
      <h1 className="text-4xl font-bold text-white ml-8">Hello, Khaled Hamdy</h1>
    </div>
  );
}

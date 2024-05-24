export function TeachersList({ name, post }) {
  return (
    <div className="w-full grid grid-cols-2 text-gray-800 font-semibold mb-3">
      <p className="">{name}</p>
      <p className="text-center">{post}</p>
    </div>
  );
}

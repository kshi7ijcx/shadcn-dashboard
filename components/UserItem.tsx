const UserItem = () => {
  return (
    <div className="flex items-center justify-between gap-6 border rounded-[8px] p-2" >
      <div className="avatar rounded-full min-h-10 min-w-10 bg-emerald-500 text-white font-[700] flex items-center justify-center">
        KC
      </div>
      <div className="grow">
        <p className="font-bold">Kshitij Chauhan</p>
        <p className="text-neutral-500">kingKC@gmail.com</p>
      </div>
    </div>
  );
};
export default UserItem;

import UserItem from "./UserItem"

const Sidebar = () => {
  return (
    <div className="flex flex-col w-[300px] min-w-[300px] border border-r min-h-screen p-4">
      <div>
        <UserItem />
      </div>
      <div className="grow">Menu</div>
      <div>Settings / Notifications</div>
    </div>
  )
}
export default Sidebar
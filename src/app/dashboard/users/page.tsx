import { cookies } from "next/headers";
interface ApiRes {
  _id: string;
  role: "user" | "admin" | "seller";
  name: string;
  email: string;
  orderCount: number;
  productCount: number;
  createdAt: string;
  updatedAt: string;
}
export default async function Users() {
  const token = (await cookies()).get("token")?.value;

  const usersData: ApiRes[] = await (
    await fetch(`${process.env.NEXT_PUBLIC_CLIENT_URL}/get-users`, {
      method: "GET",
      headers: {
        Cookie: `token=${token}`,
      },
    })
  ).json();

  return (
    <div className="overflow-x-auto p-5 rounded-md bg-white/50">
      <h1 className="text-2xl mb-8 font-semibold">Users information</h1>
      <table className="table-fixed shrink-0 w-full min-w-[900px] text-sm border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th style={{ width: "5%" }} className="border px-4 py-2 text-left">
              No.
            </th>
            <th style={{ width: "13%" }} className="border px-4 py-2 text-left">
              Name
            </th>
            <th style={{ width: "20%" }} className="border px-4 py-2 text-left">
              Email
            </th>
            <th style={{ width: "10%" }} className="border px-4 py-2 text-left">
              Role
            </th>
            <th style={{ width: "9%" }} className="border px-4 py-2 text-left">
              Orders
            </th>
            <th style={{ width: "10%" }} className="border px-4 py-2 text-left">
              Products
            </th>
            <th style={{ width: "10%" }} className="border px-4 py-2 text-left">
              Created
            </th>
            <th style={{ width: "10%" }} className="border px-4 py-2 text-left">
              Updated
            </th>
            <th
              style={{ width: "11.11%" }}
              className="border px-4 py-2 text-left"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((data) => (
            <tr key={data._id} className="odd:bg-white even:bg-gray-50">
              <td className="border px-4 py-2">{1}</td>
              <td className="border px-4 py-2">{data.name}</td>
              <td className="border px-4 py-2">{data.email}</td>
              <td className="border px-4 py-2">{data.role.toUpperCase()}</td>
              <td className="border px-4 py-2">{data.orderCount}</td>
              <td className="border px-4 py-2">{data.productCount}</td>
              <td className="border px-4 py-2">
                {new Date(data.createdAt).toLocaleDateString()}
              </td>
              <td className="border px-4 py-2">
                {new Date(data.updatedAt).toLocaleDateString()}
              </td>
              <td className="border px-4 py-2">
                <span className="text-sm cursor-default px-2 py-1 border rounded bg-white hover:bg-red-200">
                  Action
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

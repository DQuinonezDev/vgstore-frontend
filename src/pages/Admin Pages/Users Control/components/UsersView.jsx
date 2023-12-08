import React, { useEffect, useState } from 'react';
import { SidebarAdmin } from '../../components/SidebarAdmin';
import { getUsers } from '../api/apiUser';

export const UsersView = () => {

    const [userList, setUserList] = useState([]);

    const UserListView = async () => {
        const UserList = await getUsers();
        setUserList(UserList);
    };

    useEffect(() => {
        UserListView();
    }, [
    ]);


    return (
        <>
            <div className="flex h-screen overflow-hidden">

                <SidebarAdmin />
                <div className="flex-grow overflow-x-auto p-6 lg:ml-56 mt-28">
                    <div className="mx-auto max-w-6xl shadow-md sm:rounded-lg overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left rtl:text-right text-black">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-300 ">
                                    <tr>
                                        <th scope="col" className="p-4">
                                            <div className="flex items-center">
                                                <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Nombre
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Apellido
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Telefono
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Fecha de nacimiento
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Correo Electronico
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Direccion
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Acciones
                                        </th>
                                    </tr>
                                </thead>
                                {userList.map((u) => {
                                    return (

                                        <tbody key={u._id}>
                                            <tr className="bg-gray-50 border-b hover:bg-gray-50 ">
                                                <td className="w-4 p-4">
                                                    <div className="flex items-center">
                                                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                                    </div>
                                                </td>
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                                    {u.name}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {u.lastname}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {u.cellphone}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {u.birthday}

                                                </td>
                                                <td className="px-6 py-4">
                                                    {u.mail}

                                                </td>
                                                <td className="px-6 py-4">
                                                    {u.shippingAddress}

                                                </td>

                                                <td className="px-6 py-4">
                                                    <a href="#" className="font-medium text-blue-600  hover:underline">Editar</a>
                                                    <span className="px-2">|</span>
                                                    <a href="#" className="font-medium text-red-600  hover:underline">Eliminar</a>

                                                </td>
                                            </tr>

                                        </tbody>
                                    )
                                })}
                            </table>

                        </div>

                    </div>


                </div>

            </div>
        </>
    );
};

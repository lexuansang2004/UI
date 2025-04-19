import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Gọi API để lấy dữ liệu
        axios.get('https://67dfeeba7635238f9aabc58e.mockapi.io/customers')
            .then((response) => {
                setData(response.data); // Lưu dữ liệu vào state
                setLoading(false); // Đặt loading thành false khi dữ liệu đã được tải
            })
            .catch((err) => {
                setError('Failed to fetch data'); // Hiển thị lỗi nếu có vấn đề
                setLoading(false);
            });
    }, []); // Chỉ gọi API một lần khi component được mount

    const statusColor = {
        'New': 'bg-blue-100 text-blue-600',
        'In Progress': 'bg-yellow-100 text-yellow-600',
        'Completed': 'bg-green-100 text-green-600',
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="flex min-h-screen font-sans bg-gray-50">
            {/* Sidebar */}
            <aside className="w-80 bg-white border-r p-6">
                <img className='mb-4' src="../src/assets/Image 1858.png" alt="" />
                <nav className="space-y-4 text-gray-700 font-medium">
                    <div className="bg-pink-100 text-pink-600 px-4 py-2 rounded flex align-items-center gap-4"><img className='bg-dark' src="../src/assets/Squares four 1.png" alt="" /> Dashboard</div>
                    <div className="hover:text-pink-500 cursor-pointer flex align-items-center gap-4"><img className='bg-dark' src="../src/assets/Folder.png" alt="" />Projects</div>
                    <div className="hover:text-pink-500 cursor-pointer flex align-items-center gap-4"><img className='bg-dark' src="../src/assets/Groups.png" alt="" />Teams</div>
                    <div className="hover:text-pink-500 cursor-pointer flex align-items-center gap-4"><img className='bg-dark' src="../src/assets/Pie chart.png" alt="" />Analytics</div>
                    <div className="hover:text-pink-500 cursor-pointer flex align-items-center gap-4"><img className='bg-dark' src="../src/assets/Chat.png" alt="" />Messages</div>
                    <div className="hover:text-pink-500 cursor-pointer flex align-items-center gap-4"><img className='bg-dark' src="../src/assets/Code.png" alt="" />Integrations</div>
                </nav>
                <div className="mt-16 text-sm text-center bg-gray-100 p-4 rounded">
                    <img src="../src/assets/Group.png" className='w-70 h-70' alt="" />
                    <div className="mb-2 font-semibold">V2.0 is available</div>
                    <button className="text-white bg-pink-500 px-4 py-1 rounded text-sm">Try now</button>
                </div>
            </aside>

            {/* Main content */}
            <main className="flex-1 p-8">
                {/* Top bar */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-pink-500">Dashboard</h1>
                    <div className="flex items-center gap-4">
                        <input
                            type="text"
                            placeholder="🔍 Search..."
                            className="px-3 py-2 border rounded bg-white"
                        />
                        <img src="../src/assets/Bell 1.png" alt="" />
                        <img src="../src/assets/Question 1.png" alt="" />
                        <img src="https://i.pravatar.cc/30" className="rounded-full w-8 h-8" alt="Avatar" />
                    </div>
                </div>
                <h2 className="flex items-center gap-2 text-xl font-bold mb-4">
                    <img src="../src/assets/Squares four 1.png" alt="" className="w-6 h-6" />
                    Overview
                </h2>

                {/* Overview Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-pink-100 p-6 rounded shadow-sm">
                        <p className="text-sm text-gray-500">Turnover</p>
                        <h2 className="text-2xl font-bold">$92,405</h2>
                        <p className="text-sm text-green-600">↑ 5.39% period of change</p>
                    </div>
                    <div className="bg-blue-100 p-6 rounded shadow-sm">
                        <p className="text-sm text-gray-500">Profit</p>
                        <h2 className="text-2xl font-bold">$32,218</h2>
                        <p className="text-sm text-green-600">↑ 5.39% period of change</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded shadow-sm">
                        <p className="text-sm text-gray-500">New customer</p>
                        <h2 className="text-2xl font-bold">298</h2>
                        <p className="text-sm text-green-600">↑ 6.84% period of change</p>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white p-6 rounded shadow">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="flex items-center gap-2 text-xl font-semibold">
                            <img src="../src/assets/detail.png" alt="" className="w-6 h-6" />
                            Detailed report
                        </h2>
                        <div className="flex align-item-center gap-4">
                            <button className="px-4 py-1 bg-pink-100 text-pink-600 rounded flex align-item-center gap-4"><img src="../src/assets/Download.png" alt="" />Import</button>
                            <button className="px-4 py-1 bg-pink-100 text-pink-600 rounded flex align-item-center gap-4"><img src="../src/assets/Download.png" alt="" />Export</button>
                        </div>
                    </div>
                    <table className="w-full text-sm text-left">
                        <thead className="text-gray-500 border-b">
                            <tr>
                                <th className="py-2"><input type="checkbox" /></th>
                                <th>CUSTOMER NAME</th>
                                <th>COMPANY</th>
                                <th>ORDER VALUE</th>
                                <th>ORDER DATE</th>
                                <th>STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, idx) => (
                                <tr key={idx} className="border-b hover:bg-gray-50">
                                    <td className="py-2"><input type="checkbox" /></td>
                                    <td className="py-2 flex items-center gap-2">
                                        <img src={row.avatar} alt={row.name} className="w-8 h-8 rounded-full object-cover" />
                                        {row.name}
                                    </td>
                                    <td>{row.company}</td>
                                    <td>{row.value}</td>
                                    <td>{row.date}</td>
                                    <td>
                                        <span className={`px-2 py-1 rounded text-xs font-semibold ${statusColor[row.status] || ''}`}>
                                            {row.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Pagination */}
                    <div className="flex justify-center mt-6 gap-2 text-sm">
                        <button className="px-3 py-1 bg-gray-100 rounded">‹</button>
                        <button className="px-3 py-1 bg-pink-500 text-white rounded">1</button>
                        <button className="px-3 py-1 bg-gray-100 rounded">2</button>
                        <button className="px-3 py-1 bg-gray-100 rounded">3</button>
                        <button className="px-3 py-1 bg-gray-100 rounded">…</button>
                        <button className="px-3 py-1 bg-gray-100 rounded">10</button>
                        <button className="px-3 py-1 bg-gray-100 rounded">›</button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;

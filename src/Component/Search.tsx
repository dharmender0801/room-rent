import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { APICALL } from "../API-COM/ApiCall";
import { ModelType } from "../Service/Model";
import Modal from "./Model";
import Select, { MultiValue } from 'react-select';
import { toast } from "react-toastify";

const SearchComp = () => {
    const [pageData, setPageData] = useState(ModelType.pagable)
    const [data, setData] = useState(ModelType.Data);
    const [showModal, setShowModal] = useState(false);
    const [showCommentModal, setShowCommentModal] = useState(false);
    const [currentFile, setcurrentFile] = useState();
    const [currentFileId, setcurrentFileId] = useState();
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const [selectedUsers, setSelectedUsers] = useState<any[]>([]);
    const [newComment, setNewComment] = useState('');
    const [comments, setComments] = useState<{ id: number, comment: string, commentBy: string }[]>([]);
    const handleMultiSelectChange = (selectedOptions: any) => {
        setSelectedUsers(selectedOptions || []);
    };

    const getPageData = () => {
        APICALL.getPageData(pageData).then((res) => {
            console.log(res.data);
            setData(res.data.data);
        }).catch((err) => {
            console.log(err);
            navigate("/login");
        })
    }
    const getUsers = () => {
        APICALL.getUserData(pageData).then((res) => {
            console.log(res.data);
            setUsers(res.data.data);
        }).catch((err) => {
            console.log(err);
        })
    }
    useEffect(() => {
        setPageData(prevPageData => ({
            ...prevPageData,
            pageNumber: 0,
            pageSize: 10,
            sort: "ASC",
        }));
        getPageData();
        getUsers();
    }, [])

    const thStyle: React.CSSProperties = {
        padding: '10px',
        border: '1px solid #ddd',
        textAlign: 'left',
        fontWeight: 'bold',
    };

    const tdStyle: React.CSSProperties = {
        padding: '10px',
        border: '1px solid #ddd',
        textAlign: 'left',
    };



    const handleAccessClick = (file: any) => {
        setShowModal(true);
        setcurrentFile(file.fileName);
        setcurrentFileId(file.id);
        setSelectedUsers([]);
    };

    const handleCommentClick = (file: any) => {
        setShowCommentModal(true);
        setcurrentFile(file.fileName);
        setcurrentFileId(file.id);
        setComments(file.fileComment);
    };

    const options = users.map((user: any) => ({
        value: user.id,
        label: user.firstName +" "+user.lastName,
    }));

    const sendAccess = () => {
        const userIds = selectedUsers.map((user: any) => Number(user.value));
        const payload = {
            fileId: currentFileId,
            userIds: userIds
        };
        console.log("Payload: ", payload);
        APICALL.sendAccess(payload).then((res) => {
            setShowModal(false);
            if (res.status === 200) {
                toast.success('Access Sent to ' + selectedUsers.map((user) => user.label).join(', '));
            } else {
                toast.error(`Upload failed! Status: ${res.status}`);
            }
        }).catch((err) => {
            console.log(err);
        });


    }

    const addComment = () => {
        const fileComment = {
            fileId: currentFileId,
            comment: newComment,
        };
        APICALL.addCommentToFile(fileComment).then(res => {
            setShowCommentModal(false);
            toast.success("Comment added!");
            setNewComment('');
            getPageData();
        }).catch(err => {
            console.error(err);
            toast.error("Failed to add comment");
        });
    };


    return (
        <div style={{ padding: '20px' }}>
            <h2 style={{ marginBottom: '16px' }}>Uploaded Pdf</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd' }}>
                <thead style={{ backgroundColor: '#f9f9f9' }}>
                    <tr>
                        <th style={thStyle}>ID</th>
                        <th style={thStyle}>Action</th>
                        <th style={thStyle}>File Name</th>
                        <th style={thStyle}>File Url</th>
                        <th style={thStyle}>Created At</th>

                    </tr>
                </thead>
                <tbody>
                    {data.map((user: any) => (
                        <tr key={user.id}>
                            <td style={tdStyle}>{user.id}</td>
                            <td style={tdStyle}>
                                <button
                                    style={{
                                        padding: '7px 15px',
                                        backgroundColor: '#4DAF70',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '5px',
                                        fontSize: '16px',
                                        cursor: 'pointer',
                                        transition: 'background-color 0.3s ease',
                                    }}
                                    onClick={() => handleAccessClick(user)}>Access</button>

                            </td>
                            <td
                                // style={tdStyle}
                                style={{ ...tdStyle, color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}
                                onClick={() => handleCommentClick(user)}
                            >{user.fileName}</td>
                            <td style={tdStyle}>{user.absolutePath}</td>
                            <td style={tdStyle}>{user.createdAt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Modal
                show={showModal}
                onClose={() => setShowModal(false)}
                content={
                    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
                        <h2 style={{ marginBottom: '16px', fontSize: '20px', color: '#333' }}>
                            File: {currentFile}
                        </h2>

                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>
                            Grant access to:
                        </label>
                        <Select
                            isMulti
                            options={options}
                            value={selectedUsers}
                            onChange={handleMultiSelectChange}
                            placeholder="Select users..."
                        />
                        <div style={{ marginTop: '10px', fontSize: '14px', color: '#555' }}>
                            Selected: {selectedUsers.map((user) => user.label).join(', ')}
                        </div>
                        <button
                            style={{
                                marginTop: '20px',
                                padding: '10px 20px',
                                backgroundColor: '#4CAF50',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '5px',
                                fontSize: '16px',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s ease',
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.backgroundColor = '#45a049';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.backgroundColor = '#4CAF50';
                            }}
                            onClick={sendAccess}
                        >
                            Send Access
                        </button>

                    </div>
                }
            />
            <Modal
                show={showCommentModal}
                onClose={() => setShowCommentModal(false)}
                content={
                    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
                        <h2 style={{ marginBottom: '16px', fontSize: '20px', color: '#333' }}>
                            File: {currentFile}
                        </h2>

                        <div style={{ marginTop: '30px' }}>
                            <label style={{ display: 'block', fontWeight: 500, marginBottom: '8px' }}>Add Comment:</label>
                            <textarea
                                rows={3}
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                style={{ width: '100%', padding: '10px', borderRadius: '5px', borderColor: '#ccc' }}
                                placeholder="Write your comment here..."
                            />
                            <button
                                style={{
                                    marginTop: '10px',
                                    padding: '8px 16px',
                                    backgroundColor: '#2196F3',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                }}
                                onClick={addComment}
                            >
                                Add Comment
                            </button>
                        </div>

                        <div style={{ marginTop: '20px' }}>
                            <h4 style={{ fontWeight: 600 }}>Previous Comments:</h4>
                            {comments.length === 0 ? (
                                <p style={{ color: '#777' }}>No comments yet.</p>
                            ) : (
                                <ul style={{ paddingLeft: '20px', color: '#444' }}>


                                    {comments.map((c, index) => (
                                        <li key={index} style={{ marginBottom: '8px' }}>
                                            <strong> {c?.commentBy}:</strong> {c?.comment}
                                        </li>
                                    ))}


                                </ul>
                            )}
                        </div>
                    </div>
                }
            />

        </div>

    )
}
export default SearchComp;
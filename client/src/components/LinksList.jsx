import React from "react"
import {Link} from "react-router-dom"

const LinksList = ({ links }) => {
    if (!links.length) {
        return <h4 className="center">Links not yet!</h4>
    }
    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Original</th>
                    <th>Abbreviated</th>
                    <th>Open</th>
                </tr>
                </thead>
                <tbody>
                { links.map((link, index) => {
                    return (
                        <tr key={link._id}>
                            <td>{index + 1}</td>
                            <td>{link.from}</td>
                            <td>{link.to}</td>
                            <td>
                                <Link to={`/details/${link._id}`}>
                                    Open detail link
                                </Link>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    )
}

export default LinksList
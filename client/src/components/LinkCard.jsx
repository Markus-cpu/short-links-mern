import React from "react"

const LinkCard = ({ link }) => {
    return (
        <>
            <h2>Link</h2>
            <p>
                Your link:
                <a
                    href={link.to}
                    target="_blank"
                    rel="noopener noreferrer">
                    {link.to}
                </a>
            </p>
            <p>
                From link:
                <a
                    href={link.from}
                    target="_blank"
                    rel="noopener noreferrer">
                    {link.from}
                </a>
            </p>
            <p>
                Amount clicks on the link:
                <strong>{link.clicks}</strong>
            </p>
            <p>
                Created date:
                <strong>{new Date(link.date).toLocaleDateString()}</strong>
            </p>
        </>
    )
}

export default LinkCard
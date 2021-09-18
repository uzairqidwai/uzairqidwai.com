import React from 'react'
import Image from 'next/image'
import cn from 'classnames'

export default function IconButton({ iconPath, href, className }) {
    const linkClass = cn("transition rounded-full border border-gray-200 hover:border-gray-400 flex items-center justify-center w-10 h-10 p-3", className)
    return (
        <a
            href={href}
            className={linkClass}
        >
            <img
                src={iconPath}
            />
        </a>
    )
}

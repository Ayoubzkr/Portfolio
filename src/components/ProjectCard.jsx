/**
 * @copyright 2024 ayoubzokri
 * @license Apache-2.0
 */
import PropTypes from "prop-types";
import { FaGithub } from 'react-icons/fa';

const ProjectCard=({
    imgSrc,
    title,
    tags,
    projectLink,
    githubLink,
    classes,
})=>{
    return (
        <div className={"relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-insert ring-zinc-50/5 transition-colors "+classes}>
            <a href={projectLink} className="block">
                <figure className="img-box aspect-square rounded-lg">
                    <img src={imgSrc} alt={title} loading='lazy' className="img-cover"/>
                </figure>
                <div className="flex items-center justify-between gap-4 mt-4">
                    <div>
                        <h5 className="title-1 mb-3">
                            {title}
                        </h5>
                        <div className="flex flex-wrap items-center gap-2 ">
                            {tags.map((label,key)=>(
                                <span className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg " key={key} 
                                >
                                    {label}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0">
                        <span className="material-symbols-rounded" aria-hidden="true">
                            arrow_outward
                        </span>
                    </div>
                </div>
            </a>

            {githubLink && (
                <a 
                    href={githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 w-11 h-11 rounded-lg grid place-items-center bg-zinc-700 hover:bg-zinc-600 text-white shrink-0 z-10"
                >
                    <FaGithub size={24} />
                </a>
            )}
        </div>
    )
}
ProjectCard.PropTypes={
    imgSrc:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    tags:PropTypes.array.isRequired,
    projectLink:PropTypes.string,
    githubLink:PropTypes.string,
    classes:PropTypes.string,
}
export default ProjectCard
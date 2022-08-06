import React from 'react'








const ContentContainer = ({ myName }) => {



    return (
        <>
            
            <div className='ContentContainer items-center'>
                <div className='flex-auto max-w-xs self-center m-8 md:ml-auto'>
                    <img src="https://cdn.discordapp.com/attachments/968930836583940157/968954569499475978/sample_ps.png" alt="Image missing..." />
                </div>
                <div className="w-auto text-left md:mr-auto pb-6 md:pb-0">
                    <div className="pl-5 pr-20 pt-4 pb-6 shadow-lg text-gray-100 subpixel-antialiased bg-gray-800 rounded-lg leading-normal overflow-hidden w-auto text-lg">
                        <div className="mb-2 flex">
                            <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                            <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
                            <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="mt-4 flex">
                            <div className="flex-1 items-center">
                                <span className="text-green-400">warfreak:~$ </span>
                                sudo ./intro
                                <br /><br />
                                <p className=' text-red-600'>Hello!</p>
                                <p>I am <font className=' text-blue-300'>Matthew Perez</font> </p>
                                <p>a <font className=' text-orange-400'>Developer</font> </p>
                                <br />
                                <span className="text-green-400">warfreak:~$ </span> _
                                <br /><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-primary text-center'>
                <p className='text-left font-skills text-3xl '> A BIT ABOUT ME: </p><br />
                <p className='font-about-me'> &nbsp;&nbsp;&nbsp;&nbsp; I am a graduate with a course of Bachelor of Science in Information Technology at Pamantasan ng Lungsod ng Pasig. While in college, I invested myself in learning and understanding all the fields that the university offered to teach. May it be software or hardware, everything about IT interests me and pursued learning it. But these days, I have been doing web development and troubleshooting computer problems. I prefer finding a good company where I can use most of my skills. Even if I might not be qualified enough, I am very willing to train or be trained. </p>
            </div>
            <div className='container-secondary '>
                <p className='text-center font-skills text-3xl'> TECH SKILLS: </p>

                <div className='flex flex-col items-center bg-gray-800 rounded-md p-2 max-w-3xl mx-auto'>
                    <div className=' bg-slate-600 rounded-md w-full h-full'>
                        <div className="skills m-auto">
                            <div className="skill group">
                                <div className="skill-icon">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" color="#ead41c" style={{ color: "#ead41c" }} height="45" width="45" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"></path>
                                    </svg>
                                </div>
                                <p className="skill-title">JavaScript</p>
                                <Rating rate={3} />
                            </div>
                            <div className="skill group">
                                <div className="skill-icon">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" color="#2760e5" style={{ color: "#2760e5" }} height="45" width="45" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"></path>
                                    </svg>
                                </div>
                                <p className="skill-title">CSS</p>
                                <Rating rate={3} />
                            </div>
                            <div className="skill group">
                                <div className="skill-icon">
                                    <img src="php.svg" alt="PHP" height="80" width="80" />
                                </div>
                                <p className="skill-title">PHP</p>
                                <Rating rate={4} />
                            </div>
                            <div className="skill group">
                                <div className="skill-icon">
                                    <img src="vb-net.svg" alt="Visual Basic" height="45" width="45" />
                                </div>
                                <p className="skill-title">Visual Basic</p>
                                <Rating rate={3.5} />
                            </div>
                            <div className="skill group">
                                <div className="skill-icon">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" color="#346998" height="45" width="45" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"></path>
                                    </svg>
                                </div>
                                <p className="skill-title">Python</p>
                                <Rating rate={3.5} />
                            </div>
                            <div className="skill group">
                                <div className="skill-icon">
                                    <img src="java.svg" alt="java" height="50" width="50" />
                                </div>
                                <p className="skill-title">Java</p>
                                <Rating rate={2} />
                            </div>
                            <div className="skill group">
                                <div className="skill-icon">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" color="#e6640a" height="45" width="45" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path>
                                    </svg>
                                </div>
                                <p className="skill-title">HTML</p>
                                <Rating rate={4} />
                            </div>
                            <div className="skill group">
                                <div className="skill-icon">
                                    <img src="sql.svg" alt="SQL" height="45" width="45" />
                                </div>
                                <p className="skill-title">SQL</p>
                                <Rating rate={4.5} />
                            </div>
                            <div className="skill group">
                                <div className="skill-icon">
                                    <img src="c++.svg" alt="C++" height="45" width="45" />
                                </div>
                                <p className="skill-title">C++</p>
                                <Rating rate={3.5} />
                            </div>


                            <div className="skill group">
                                <div className="skill-icon">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" color="white" style={{ color: "#5ad2ea", height: 45, width: 45 }} xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"></path>
                                    </svg>
                                </div>
                                <p className="text-bold p-2 text-xs">ReactJS</p>
                                <Rating rate={3.5} />
                            </div>
                            <div className="skill group">
                                <div className="skill-icon">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" color="white" height="45" width="45" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M.38 0a.268.268 0 0 0-.256.332l2.894 11.716a.268.268 0 0 0 .01.04l2.89 11.708a.268.268 0 0 0 .447.128L23.802 7.15a.268.268 0 0 0-.112-.45l-5.784-1.667a.268.268 0 0 0-.123-.035L6.38 1.715a.268.268 0 0 0-.144-.04L.456.01A.268.268 0 0 0 .38 0zm.374.654L5.71 2.08 1.99 5.664zM6.61 2.34l4.864 1.4-3.65 3.515zm-.522.12l1.217 4.926-4.877-1.4zm6.28 1.538l4.878 1.404-3.662 3.53zm-.52.13l1.208 4.9-4.853-1.392zm6.3 1.534l4.947 1.424-3.715 3.574zm-.524.12l1.215 4.926-4.876-1.398zm-15.432.696l4.964 1.424-3.726 3.586zM8.047 8.15l4.877 1.4-3.66 3.527zm-.518.137l1.236 5.017-4.963-1.432zm6.274 1.535l4.965 1.425-3.73 3.586zm-.52.127l1.235 5.012-4.958-1.43zm-9.63 2.438l4.873 1.406-3.656 3.523zm5.854 1.687l4.863 1.403-3.648 3.51zm-.54.04l1.214 4.927-4.875-1.4zm-3.896 4.02l5.037 1.442-3.782 3.638z"></path>
                                    </svg>
                                </div>
                                <p className="text-bold p-2 text-xs">ThreeJS</p>
                                <Rating rate={2.5} />
                            </div>
                            <div className="skill group">
                                <div className="skill-icon">
                                    <img src="laravel.svg" alt="Laravel" height="45" width="45" />
                                </div>
                                <p className="skill-title ">Laravel</p>
                                <Rating rate={3.5} />
                            </div>
                            <div className="skill group">
                                <div className="skill-icon">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" color="#35b3eb" height="45" width="45" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
                                    </svg>
                                </div>
                                <p className="skill-title">Tailwind</p>
                                <Rating rate={4} />
                            </div>
                            <div className="skill group">
                                <div className="skill-icon">
                                    <img src="bootstrap5.svg" alt="Bootstrap" height="45" width="45" />
                                </div>
                                <p className="skill-title">Bootstrap</p>
                                <Rating rate={3} />
                            </div>
                            <div className="skill group">
                                <div className="skill-icon">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" color="#359e40" height="45" width="45" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"></path>
                                    </svg>
                                </div>
                                <p className="skill-title">MongoDB</p>
                                <Rating rate={3} />
                            </div>
                            <div className="skill group">
                                <div className="skill-icon">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" color="#f24c2d" height="45" width="45" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"></path>
                                    </svg>
                                </div>
                                <p className="skill-title">Git</p>
                                <Rating rate={2.5} />
                            </div>
                            <div className="skill group">
                                <div className="skill-icon">
                                    <img src="mysql.svg" alt="MySQL" height="45" width="45" />
                                </div>
                                <p className="skill-title">MySQL</p>
                                <Rating rate={4} />
                            </div>
                        </div>
                    </div>

                </div>
                <div className='w-10 h-7 bg-gray-800 mx-auto'></div>
                <div className='w-40 h-5 bg-gray-800 mx-auto rounded'></div>

                <p className='text-center font-skills text-3xl mt-10'> ADDITIONAL TECH SKILLS: </p>

                <div className='flex flex-col items-center'>
                    <div className="skills">
                        <div className="skill group">
                            <div className="skill-icon">
                                <img src="pc.svg" alt="Computer Assembly/Disassembly" height="45" width="45" />
                            </div>
                            <p className="skill-title">Computer Assembly</p>
                            <Rating rate={4.5} />
                        </div>
                        <div className="skill group">
                            <div className="skill-icon">
                                <img src="computer-repair.svg" alt="Computer Troubleshooting" height="60" width="60" />
                            </div>
                            <p className="skill-title">Computer Troubleshooting</p>
                            <Rating rate={4.5} />
                        </div>
                        <div className="skill group">
                            <div className="skill-icon">
                                <img src="photoshop.svg" alt="Photoshop" height="45" width="45" />
                            </div>
                            <p className="skill-title">Photoshop</p>
                            <Rating rate={2.5} />
                        </div>
                        <div className="skill group">
                            <div className="skill-icon">
                                <img src="blender.svg" alt="Blender" height="55" width="55" />
                            </div>
                            <p className="skill-title">Blender</p>
                            <Rating rate={2.5} />
                        </div>
                    </div>
                </div>

            </div>

            <div className='container-primary'>
                <p className='text-3xl font-bold'>MY REPOSITORIES: </p>

                <div className='pt-10'></div>

                <div className='relative items-center bg-secondary rounded-md p-1 max-w-3xl mx-auto group'>
                    <div className=' relative overflow-hidden pb-4'>
                        <img src="https://media.discordapp.net/attachments/968930836583940157/985029914422046790/unknown.png?width=810&height=443" />
                        <div className='absolute bottom-0 left-0'>
                            <p className='text-center text-white'>
                                Hotel Reservation System
                            </p>

                        </div>
                    </div>
                    <a href="https://github.com/magandangusername/Hotel" target="_blank" className=' scale-0 group-hover:scale-100 absolute top-0 w-full h-full bg-secondary opacity-70 rounded-md p-1 max-w-3xl m-auto items-center'>

                        <img src="github.svg" alt="Repository link" className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                    </a>
                </div>

                <div className='pt-10'></div>

                <div className='relative items-center bg-secondary rounded-md p-1 max-w-3xl mx-auto group'>
                    <div className='relative overflow-hidden pb-4'>
                        <img src="https://cdn.discordapp.com/attachments/968930836583940157/978106522716471386/unknown.png" />
                        <div className='absolute bottom-0 left-0'>
                            <p className='text-center text-white'>
                                Ticket Selling and Booking System (Admin side)
                            </p>

                        </div>
                    </div>
                    <a href="https://github.com/magandangusername/Ticket-Queen" target="_blank" className='scale-0 group-hover:scale-100 absolute top-0 w-full h-full bg-secondary opacity-70 rounded-md p-1 max-w-3xl mx-auto items-center'>
                        <img src="github.svg" alt="Repository link" className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                    </a>
                </div>

                <div className='pt-10'></div>

                <p className=' text-2xl font-semibold'>You can check out my repositories here: </p>
                <a href="https://github.com/magandangusername">https://github.com/magandangusername</a>
            </div>

            <div className='container-secondary'>
                <p className='text-3xl font-semibold py-7'>ACADEMIC ACHIEVEMENTS: </p>
                <div className='text-xl'>
                    <p>
                        - Graduated as a salutatorian and best in programming in Senior High at a Computer College -
                    </p>
                    <p>
                        - Earned 2nd place in programming contest in College -
                    </p>
                    <p>
                        - Graduated as President’s Lister in College -
                    </p>
                </div>
                
            </div>

            <div className='container-primary'>
                <p className=' text-3xl'>WORK EXPERIENCE: </p>
                <div className=' pl-12 py-7 text-xl'>
                    <div>
                        <p className=' font-semibold'>
                            CYGNUS ONLINE SERVICES
                        </p>
                        <p>
                            On-the-job Training (OJT) Junior IT Assistant/Backend Developer
                        </p>
                        <p className=' text-sm'>
                            March 2022 - May 2022
                        </p>
                    </div>
                    
                </div>

            </div>
            <div className='container-secondary text-left'>
                <p className=' font-skills text-3xl'> PREFERRED JOB: </p>
                <div className=' pl-12 py-7 text-xl'>
                    <p>
                        - Back-end developer
                    </p>
                    <p>
                        - Front-end developer
                    </p>
                    <p>
                        - Full Stack web developer
                    </p>
                    <p>
                        - IT technician
                    </p>
                    <p>
                        - Computer programmer
                    </p>
                    <p className='pt-5 text-2xl'>
                        (other options)
                    </p>
                    <p>
                        - Quality assurance tester
                    </p>
                    <p>
                        - Support Specialist
                    </p>
                    <p>
                        - Photo editing
                    </p>
                    <p>
                        - other IT related field
                    </p>
                </div>

            </div>
            <div className='container-primary'>
                <p className='text-left font-skills text-3xl'> Wanna give me a try? You can contact me here: </p>
                <p>
                    perez.johnmatthewleonard@gmail.com
                </p>
            </div>
        </>
    )
}

const Rating = ({ rate }) => {
    return (
        <span className="absolute rating rating-sm w-auto rating-half my-3 scale-0 group-hover:scale-100 pt-28" title={"✭ " + rate}>
            <div className='float-left'>
                <input type="radio" className="bg-yellow-500 mask mask-star-2 mask-half-1" disabled checked={rate == 0.5} />
                <input type="radio" className="bg-yellow-500 mask mask-star-2 mask-half-2" disabled checked={rate == 1} />
                <input type="radio" className="bg-yellow-500 mask mask-star-2 mask-half-1" disabled checked={rate == 1.5} />
                <input type="radio" className="bg-yellow-500 mask mask-star-2 mask-half-2" disabled checked={rate == 2} />
                <input type="radio" className="bg-yellow-500 mask mask-star-2 mask-half-1" disabled checked={rate == 2.5} />
                <input type="radio" className="bg-yellow-500 mask mask-star-2 mask-half-2" disabled checked={rate == 3} />
                <input type="radio" className="bg-yellow-500 mask mask-star-2 mask-half-1" disabled checked={rate == 3.5} />
                <input type="radio" className="bg-yellow-500 mask mask-star-2 mask-half-2" disabled checked={rate == 4} />
                <input type="radio" className="bg-yellow-500 mask mask-star-2 mask-half-1" disabled checked={rate == 4.5} />
                <input type="radio" className="bg-yellow-500 mask mask-star-2 mask-half-2" disabled checked={rate == 5} />
            </div>

        </span>
    )
}

export default ContentContainer
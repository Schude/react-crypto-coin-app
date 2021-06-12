import {useEffect}from 'react'

const UseOutsideClick = (detail,toggleOpen) => (
    useEffect(() => {
        const detailCurrent = detail.current;
        document.addEventListener('mousedown', ({target}) => {
            if (detailCurrent && !detailCurrent.contains(target)) {
                toggleOpen(false);
            }
        });
        return () => {
            document.removeEventListener('mousedown', ({target}) => {
                if (detailCurrent && !detailCurrent.contains(target)) {
                    toggleOpen(false);
                }
            });
        };
    }, [detail, toggleOpen])
)

export default UseOutsideClick


export const Td = ({num}: {num: number}) => {
    const handleOnclick = (num: number) => {
        console.log(num)
    }
    return <td onClick={() => handleOnclick(num)}></td>
}
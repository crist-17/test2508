import Book from './Book'

function Library() {


    return (
        <div> <h3>도서관</h3>
            <Book name="도서관속React" total={50}></Book>
            <Book name="도서관속노드" total={500}></Book>
            <Book name="도서관속도스" total={600}></Book>
        </div>
    )
}

export default Library
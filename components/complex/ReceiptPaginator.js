import React from 'react';
import PropTypes from 'prop-types';
import './ReceiptPaginator.css';
 
 
 

 
class ReceiptPaginator extends React.Component {
    
    static propTypes = {
        receipts: PropTypes.array.isRequired,
        onChangePage: PropTypes.func.isRequired,
        initialPage: PropTypes.number,
        pageSize: PropTypes.number
    }

        state = { 
            receipts: this.props.receipts,
            pager: {},
            initialPage: 1,
            pageSize: 5,
        };
        
    
 
    componentWillMount() {
        // Устанавливаем страницы, если массив рецептов не пустой
        if (this.state.receipts && this.state.receipts.length) {
            this.setPage(this.state.initialPage);
        }
    }
 
    componentDidUpdate(prevProps, prevState) {
        // перерендерим страницу, если массив рецептов изменился
        if (this.props.receipts !== prevProps.receipts) {
            this.setPage(this.state.initialPage);
        }
    }
 
    setPage(page) {
        var { receipts, pageSize } = this.state;
        var pager = this.state.pager;
 
        if (page < 1 || page > pager.totalPages) {
            return;
        }
 
        
        pager = this.getPager(receipts.length, page, pageSize);
 
        // Новая страница рецептов из массива
        var pageOfreceipts = this.props.receipts.slice(pager.startIndex, pager.endIndex + 1);
 
        
        this.setState({ pager: pager });
        console.log("receipts on page: "+pageOfreceipts)
        // меняем страницу у родителя
        this.props.onChangePage(pageOfreceipts);
    }
 
    getPager(totalReceipts, currentPage, pageSize) {
        // по умолчанию открываем 1 страницу
         currentPage = currentPage || 1;
 
        // Задаём размер страницы по умолчанию
         pageSize = pageSize || 5;
 
        // Всего страниц
        let totalPages = Math.ceil(totalReceipts / pageSize);
 
        let startPage, endPage;
        if (totalPages <= 10) {
            // если меньше 10 страниц
            startPage = 1;
            endPage = totalPages;
        } else {
            // если больше 10 страниц - задаём страницы начала и конца
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
 
        
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalReceipts - 1);

        let pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);
 
        
        return {
            totalReceipts: totalReceipts,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
 
    render() {
        var pager = this.state.pager;
        console.log("paginator state"+ this.state);
        console.log(pager);
        if (!pager.pages || pager.pages.length <= 1) {
            // если 1 страница - не включаем пагинацию
            return null;
        }
 
        return (
            <ul className="pagination">
            
                <li className={pager.currentPage == 1 ? 'disabled' : ''}>
                    <a onClick={() => this.setPage(1)}>First</a>
                </li>
                <li className={pager.currentPage == 1 ? 'disabled' : ''}>
                    <a onClick={() => this.setPage(pager.currentPage - 1)}>Previous</a>
                </li>
                {pager.pages.map((page, index) =>
                    <li key={index} className={pager.currentPage == page ? 'active' : ''}>
                        <a onClick={() => this.setPage(page)}>{page}</a>
                    </li>
                )}
                <li className={pager.currentPage == pager.totalPages ? 'disabled' : ''}>
                    <a onClick={() => this.setPage(pager.currentPage + 1)}>Next</a>
                </li>
                <li className={pager.currentPage == pager.totalPages ? 'disabled' : ''}>
                    <a onClick={() => this.setPage(pager.totalPages)}>Last</a>
                </li>
            </ul>
        );
    }
}
 

export default ReceiptPaginator;
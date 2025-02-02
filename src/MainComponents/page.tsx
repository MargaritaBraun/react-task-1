import { Component } from 'react';
import leftArrow from '../assets/arrow-left.svg';
import rightArrow from '../assets/arrow-right.svg';

interface PagesProps {
  currentPage: number;
  onPageChange: (page: number) => void;
  totalResults: number;
  resultsPerPage: number;
}

class Page extends Component<PagesProps> {
  totalPages = Math.ceil(this.props.totalResults / this.props.resultsPerPage);

  plusPages = () => {
    console.log(this.props.currentPage);
    const newPage = this.props.currentPage + 1;
    if (newPage <= this.totalPages) {
      this.props.onPageChange(newPage);
    }
  };

  minusPages = () => {
    console.log(this.props.currentPage);
    const newPage = this.props.currentPage - 1;
    if (newPage >= 1) {
      this.props.onPageChange(newPage);
    }
  };

  render() {
    return (
      <div className="pagination">
        <h2>{this.props.currentPage}</h2>
        <div className="pagination-container">
          <button
            type="button"
            onClick={this.minusPages}
            disabled={this.props.currentPage === 1}
            className="btn-page"
          >
            <img src={leftArrow} className="btn-svg" alt="left Arrow" />
          </button>
          <button
            type="button"
            onClick={this.plusPages}
            disabled={this.props.currentPage === this.totalPages}
            className="btn-page"
          >
            <img src={rightArrow} className="btn-svg" alt="right Arrow" />
          </button>
        </div>
      </div>
    );
  }
}

export default Page;

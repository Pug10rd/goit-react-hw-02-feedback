import PropTypes from 'prop-types';
export default function FeedbackOptions({ options, onLeaveFeedback }) {
 return (
   <div>
     {options.map(opt => (
         <button
             key={opt} onClick={() => onLeaveFeedback(opt)}>{opt}
       </button>
     ))}
     {/* <button onClick={() => this.handleClick('good')}>Good</button>
    <button onClick={() => this.handleClick('neutral')}>Neutral</button>
    <button onClick={() => this.handleClick('bad')}>Bad</button> */}
   </div>
 );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
}

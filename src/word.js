WordSearch = function(matrix){
	
	this.inner_matrix =matrix;
	this.dictionary = "";

	this.add2dictionary = function(word){
		this.dictionary = word;
	};

	this.mark = function(start, end){
		return this.inner_matrix.substring(start[1],end[1]+1) == this.dictionary  ;
	};
}
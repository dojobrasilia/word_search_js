WordSearch = function(matrix){
	
	this.inner_matrix =matrix;
	this.dictionary = [];

	this.add2dictionary = function(word){
		this.dictionary.push(word);
	};

	this.mark = function(start, end){
		
			for (var i = 0; i < this.dictionary.length; i++){
				if (this.inner_matrix[start[0]].substring(start[1],end[1]+1) == this.dictionary[i])
					return true;
			}
		
		return false;
	};
}
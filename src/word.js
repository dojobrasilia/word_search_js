WordSearch = function(matrix){
	
	this.inner_matrix =matrix;
	this.dictionary = [];

	this.add2dictionary = function(word){
		this.dictionary.push(word);
	};

	this.mark = function(start, end){
		var key = ""
		if (start[0] == end[0])
			key = this.inner_matrix[start[0]].substring(start[1],end[1]+1);
		else if (start[1] == end[1]){
			for (var row = start[0]; row <= end[0]; row ++){
				key += this.inner_matrix[row][start[1]]
			}
		}else {
			if (Math.abs(start[0]-end[0]) != Math.abs(start[1]-end[1])) {
				return false
			}
			var col = start[1];
			for (var row = start[0]; row <= end[0]; row ++){
				key += this.inner_matrix[row][col];
				if (start[1] < end[1])	col ++;
				else					col --;
			}
		}
			
		return this.isInDict(key);
	};

	this.isInDict = function(word){
		for (var i = 0; i < this.dictionary.length; i++){
			if ( word == this.dictionary[i])
				return true;
		}
		return false;
	}
}
package com.wipro.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.wipro.model.Vcd;
import com.wipro.model.Store;

public interface VcdRepository extends JpaRepository<Vcd, Integer>{
   
	@Query("from Vcd where store.storeId=:storeId")
	List<Vcd> getAllVcdsByStoreId(int storeId);

	
	
	
	

}

package com.wipro.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wipro.model.Cart;
import com.wipro.model.Vcd;
import com.wipro.model.Store;
import com.wipro.repository.VcdRepository;

@Service
public class VcdService {
	
	@Autowired
	VcdRepository fr;

	public void addingVcdDetails(Vcd f) {
		fr.save(f);
		
	}

	public List<Vcd> getAllVcds() {	
		return fr.findAll();
	}

	public List<Vcd> getAvailableVcds(int storeId) {
		
		return fr.getAllVcdsByStoreId(storeId);
	}

	public Vcd getFood(int vcdId) {
		
		return fr.findById(vcdId).orElse(null);
	}

	

	

}

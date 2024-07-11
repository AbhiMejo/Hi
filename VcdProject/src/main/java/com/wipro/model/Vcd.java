package com.wipro.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Vcd {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int vcdId;
	private String vcdName;
	private double vcdPrice;
	private String storeName;
	
	
	@ManyToOne
	@JoinColumn(name="storeId")
	private Store store;


	public int getvcdId() {
		return vcdId;
	}


	public void setFoodId(int vcdId) {
		this.vcdId = vcdId;
	}


	public String getvcdName() {
		return vcdName;
	}


	public void setFoodName(String vcdName) {
		this.vcdName = vcdName;
	}


	public double getvcdPrice() {
		return vcdPrice;
	}


	public void setFoodPrice(double vcdPrice) {
		this.vcdPrice = vcdPrice;
	}


	public String getStoreName() {
		return storeName;
	}


	public void setStoreName(String storeName) {
		this.storeName = storeName;
	}


	public Store getStore() {
		return store;
	}


	public void setStore(Store store) {
		this.store = store;
	}


	@Override
	public String toString() {
		return "Food [foodId=" + vcdId + ", foodName=" + vcdName + ", foodPrice=" + vcdPrice + ", storeName="
				+ storeName + ", store=" + store + "]";
	}

	
	
	
	
	
	
	

}

package com.wipro.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity
public class Cart {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int cartId;
	private int quantity;
	private double costPerVcd;
	private double totalCost;
	private String vcdName;
	private int userId;
//	@OneToOne
//	@JoinColumn(name="fodeId")
	private int vcdId;
	public int getCartId() {
		return cartId;
	}
	public void setCartId(int cartId) {
		this.cartId = cartId;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public double getTotalCost() {
		return totalCost;
	}
	public void setTotalCost(double totalCost) {
		this.totalCost = totalCost;
	}
	public String getVcdName() {
		return vcdName;
	}
	public void setVcdName(String vcdName) {
		this.vcdName = vcdName;
	}
	
	
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	
	
	
	public int getVcdId() {
		return vcdId;
	}
	public void setVcdId(int foodId) {
		this.vcdId = foodId;
	}
	public double getCostPerVcd() {
		return costPerVcd;
	}
	public void setCostPerVcd(double costPerPizza) {
		this.costPerVcd = costPerPizza;
	}
	@Override
	public String toString() {
		return "Cart [cartId=" + cartId + ", quantity=" + quantity + ", costPerPizza=" + costPerVcd + ", totalCost="
				+ totalCost + ", foodName=" + vcdName + ", userId=" + userId + ", foodId=" + vcdId + "]";
	}
	
	
	
	
	
	

}

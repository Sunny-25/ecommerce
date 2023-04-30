import Layout from "@/components/Layout";
import ProductForm from "@/components/ProductForm";
import axios from "axios";
import { Router, useRouter } from "next/router";
import React, { useState } from "react";

const New = () => {
	return (
		<Layout>
			<ProductForm />
		</Layout>
	);
};

export default New;

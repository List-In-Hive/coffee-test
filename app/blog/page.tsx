import { getArticles } from "@/lib/blog";
import { BlogCard } from "@/components/Cards";
export default function Blog(){return <div className="container page-section"><div className="page-intro"><p className="eyebrow">The journal</p><h1>Better cups.<br/><em>Little discoveries.</em></h1><p>Simple coffee guides from our fictional studio.</p></div><div className="product-grid">{getArticles().map(a=><BlogCard key={a.slug} article={a}/>)}</div></div>;}

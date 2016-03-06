function self(h) {
    var jd = document.getElementById("s_jd");
    var bu = document.getElementById("s_bu");
    var st = document.getElementById("s_st");
    var rs=document.getElementById("r_second");
    var rr=document.getElementById("r_r");
    document.getElementById("r_first").src= h.src;

    var radom = Math.random();
    if (radom < 0.33) {
        rs.src = jd.src;
        if(h.id=="s_jd")
        {rr.innerHTML = "平手"}
        else if(h.id=="s_bu")
        {rr.innerHTML = "输了"}
        else if(h.id=="s_st"){
            rr.innerHTML = "赢了"
        }
    } else if (radom < 0.66) {
        rs.src = bu.src;
        if(h.id=="s_jd")
        {rr.innerHTML = "赢了"}
        else if(h.id=="s_bu")
        {rr.innerHTML = "平手"}
        else if(h.id=="s_st"){
            rr.innerHTML = "输了"
        }
    } else {
        rs.src = st.src;
        if(h.id=="s_jd")
        {rr.innerHTML = "输了"}
        else if(h.id=="s_bu")
        {rr.innerHTML = "赢了"}
        else if(h.id=="s_st"){
            rr.innerHTML = "平手"
        }
    }
}
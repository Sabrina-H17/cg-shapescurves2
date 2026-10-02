class Renderer {
    // canvas:              object ({id: __, width: __, height: __})
    // num_curve_sections:  int
    constructor(canvas, num_curve_sections, show_points_flag) {
        this.canvas = document.getElementById(canvas.id);
        this.canvas.width = canvas.width;
        this.canvas.height = canvas.height;
        this.ctx = this.canvas.getContext('2d', {willReadFrequently: true});
        this.slide_idx = 0;
        this.num_curve_sections = num_curve_sections;
        this.show_points = show_points_flag;
    }

    // n:  int
    setNumCurveSections(n) {
        this.num_curve_sections = n;
        this.drawSlide(this.slide_idx);
    }

    // flag:  bool
    showPoints(flag) {
        this.show_points = flag;
        this.drawSlide(this.slide_idx);
    }
    
    // slide_idx:  int
    drawSlide(slide_idx) {
        this.slide_idx = slide_idx;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        let framebuffer = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);

        switch (this.slide_idx) {
            case 0:
                this.drawSlide0(framebuffer);
                break;
            case 1:
                this.drawSlide1(framebuffer);
                break;
            case 2:
                this.drawSlide2(framebuffer);
                break;
            case 3:
                this.drawSlide3(framebuffer);
                break;
        }

        this.ctx.putImageData(framebuffer, 0, 0);
    }

    // framebuffer:  canvas ctx image data
    drawSlide0(framebuffer) {
        // TODO: draw at least 2 Bezier curves
        //   - variable `this.num_curve_sections` should be used for `num_edges`
        //   - variable `this.show_points` should be used to determine whether or not to render vertices
        let a0 = {x: 100, y: 100};
        let a1 = {x: 150, y: 300};
        let a2 = {x: 350, y: 300};
        let a3 = {x: 400, y: 100};
        let b0 = {x: 100, y: 350};
        let b1 = {x: 200, y: 50};
        let b2 = {x: 300, y: 450};
        let b3 = {x: 450, y: 350};

        this.drawBezierCurve(a0, a1, a2, a3, this.num_curve_sections, [255, 0, 0, 255], framebuffer);
        this.drawBezierCurve(b0, b1, b2, b3, this.num_curve_sections, [0, 0, 255, 255], framebuffer);

        
        // Following line is example of drawing a single line
        // (this should be removed after you implement the curve)
        //this.drawLine({x: 100, y: 100}, {x: 600, y: 300}, [255, 0, 0, 255], framebuffer);
    }

    // framebuffer:  canvas ctx image data
    drawSlide1(framebuffer) {
        // TODO: draw at least 2 circles
        //   - variable `this.num_curve_sections` should be used for `num_edges`
        //   - variable `this.show_points` should be used to determine whether or not to render vertices
        this.drawCircle({x: 200, y: 200}, 100, this.num_curve_sections, [255, 0, 0, 255], framebuffer);
        this.drawCircle({x: 400, y: 250}, 60, this.num_curve_sections, [0, 0, 255, 255], framebuffer);


        
    }

    // framebuffer:  canvas ctx image data
    drawSlide2(framebuffer) {
        // TODO: draw at least 2 convex polygons (each with a different number of vertices >= 5)
        //   - variable `this.show_points` should be used to determine whether or not to render vertices
       // Drawing a Star
        let point_a = {x: 481, y:  55};
        let point_b = {x: 487, y:  76};
        let point_c = {x: 470, y:  88};
        let point_d = {x: 453, y:  76};
        let point_e = {x: 459, y:  55};
        let point_f = {x: 470, y:  25};
        let point_g = {x: 513, y:  56};
        let point_h = {x: 496, y: 106};
        let point_i = {x: 444, y: 106};
        let point_j = {x: 427, y:  56};

       this.drawConvexPolygon([point_a, point_b, point_c, point_d, point_e], [255, 215, 0, 255], framebuffer);
       this.drawConvexPolygon([point_f, point_e, point_a], [255, 215, 0, 255], framebuffer);
       this.drawConvexPolygon([point_g, point_a, point_b], [255, 215, 0, 255], framebuffer);
       this.drawConvexPolygon([point_h, point_b, point_c], [255, 215, 0, 255], framebuffer);
       this.drawConvexPolygon([point_i, point_c, point_d], [255, 215, 0, 255], framebuffer);
       this.drawConvexPolygon([point_j, point_d, point_e], [255, 215, 0, 255], framebuffer);

      
       let point_k = {x: 370, y: 200};
       let point_l = {x: 570, y: 200};
       let point_m = {x: 580, y: 215};
       let point_n = {x: 570, y: 240};
       let point_o = {x: 370, y: 240};
       let point_p = {x: 360, y: 215};
       let point_q = {x: 436, y: 200};
       let point_r = {x: 503, y: 200};
       let point_s = {x: 403, y: 160};
       let point_t = {x: 470, y: 140};
       let point_u = {x: 537, y: 160};

       this.drawConvexPolygon([point_k, point_l, point_m, point_n, point_o, point_p], [255, 0, 0, 255], framebuffer);
       this.drawConvexPolygon([point_k, point_q, point_s], [255, 0, 0, 255], framebuffer);
       this.drawConvexPolygon([point_q, point_r, point_t], [255, 0, 0, 255], framebuffer);
       this.drawConvexPolygon([point_r, point_l, point_u], [255, 0, 0, 255], framebuffer);
        
    
    }

    // framebuffer:  canvas ctx image data
    drawSlide3(framebuffer) {
        // TODO: draw your name!
        //   - variable `this.num_curve_sections` should be used for `num_edges`
        //   - variable `this.show_points` should be used to determine whether or not to render vertices
        this.drawBezierCurve({x: 110, y: 230}, {x: 20, y: 270}, {x: 130, y: 70}, {x: 40, y: 100}, this.num_curve_sections, [128, 0, 128, 255], framebuffer);

        this.drawLine({x: 130, y: 100}, {x: 160, y: 240}, [139, 69, 19, 255], framebuffer);
        this.drawLine({x: 160, y: 240}, {x: 190, y: 100}, [139, 69, 19, 255], framebuffer);
        this.drawLine({x: 142, y: 150}, {x: 178, y: 150}, [139, 69, 19, 255], framebuffer);
        this.drawConvexPolygon([{x: 142, y: 150}, {x: 178, y: 150}, {x: 160, y: 240}], [139, 69, 19, 255], framebuffer);

        this.drawLine({x: 210, y: 100}, {x: 210, y: 240}, [128, 0, 128, 255], framebuffer);
        this.drawBezierCurve({x: 210, y: 240}, {x: 270, y: 250}, {x: 270, y: 170}, {x: 210, y: 170}, this.num_curve_sections, [128, 0, 128, 255], framebuffer);
        this.drawBezierCurve({x: 210, y: 170}, {x: 280, y: 175}, {x: 280, y: 100}, {x: 210, y: 100}, this.num_curve_sections, [128, 0, 128, 255], framebuffer);

        this.drawLine({x: 280, y: 100}, {x: 280, y: 240}, [139, 69, 19, 255], framebuffer);
        this.drawBezierCurve({x: 280, y: 240}, {x: 340, y: 250}, {x: 340, y: 170}, {x: 280, y: 170}, this.num_curve_sections, [139, 69, 19, 255], framebuffer);
        this.drawLine({x: 290, y: 170}, {x: 330, y: 100}, [139, 69, 19, 255], framebuffer);

        this.drawLine({x: 360, y: 100}, {x: 360, y: 200}, [128, 0, 128, 255], framebuffer);
        this.drawCircle({x: 360, y: 225}, 10, this.num_curve_sections, [128, 0, 128, 255], framebuffer);

        this.drawLine({x: 390, y: 100}, {x: 390, y: 240}, [139, 69, 19, 255], framebuffer);
        this.drawLine({x: 440, y: 100}, {x: 440, y: 240}, [139, 69, 19, 255], framebuffer);
        this.drawConvexPolygon([{x: 390, y: 240}, {x: 402, y: 240}, {x: 440, y: 100}, {x: 428, y: 100}], [139, 69, 19, 255], framebuffer);

        this.drawLine({x: 460, y: 100}, {x: 490, y: 240}, [128, 0, 128, 255], framebuffer);
        this.drawLine({x: 490, y: 240}, {x: 520, y: 100}, [128, 0, 128, 255], framebuffer);
        this.drawLine({x: 472, y: 150}, {x: 508, y: 150}, [128, 0, 128, 255], framebuffer);

        if (this.show_points) {
            let points = [{x: 130, y: 100}, {x: 160, y: 240}, {x: 190, y: 100}, {x: 142, y: 150}, {x: 178, y: 150},
                          {x: 210, y: 100}, {x: 210, y: 240}, {x: 280, y: 100}, {x: 280, y: 240},
                          {x: 290, y: 170}, {x: 330, y: 100}, {x: 360, y: 100}, {x: 360, y: 200},
                          {x: 390, y: 100}, {x: 390, y: 240}, {x: 440, y: 100}, {x: 440, y: 240},
                          {x: 460, y: 100}, {x: 490, y: 240}, {x: 520, y: 100}, {x: 472, y: 150}, {x: 508, y: 150}];
            for (let i = 0; i < points.length; i++) {
                this.drawVertex(points[i], [0, 0, 0, 255], framebuffer);
            }
        }
    }

    // p0:           object {x: __, y: __}
    // p1:           object {x: __, y: __}
    // p2:           object {x: __, y: __}
    // p3:           object {x: __, y: __}
    // num_edges:    int
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawBezierCurve(p0, p1, p2, p3, num_edges, color, framebuffer) {
        // TODO: draw a sequence of straight lines to approximate a Bezier curve
        let start = {x: p0.x, y: p0.y};
        if (this.show_points) {
            this.drawVertex(p0, [0, 0, 0, 255], framebuffer);
        }

        for (let i = 1; i <= num_edges; i++) {
            let t = i / num_edges;

            let x = Math.pow(1 - t, 3) * p0.x + 3 * Math.pow(1 - t, 2) * t * p1.x + 3 * (1 - t) * Math.pow(t, 2) * p2.x + 
            Math.pow(t, 3) * p3.x;

            let y = Math.pow(1 - t, 3) * p0.y + 3 * Math.pow(1 - t, 2) * t * p1.y + 3 * (1 - t) * Math.pow(t, 2) * p2.y + 
            Math.pow(t, 3) * p3.y;

            let end = {x: Math.round(x), y: Math.round(y)};
            this.drawLine(start, end, color, framebuffer);
            if (this.show_points) {
                this.drawVertex(end, [0, 0, 0, 255], framebuffer);
            }
            start = end;
        }
        if (this.show_points) {
            this.drawVertex(p1, [0, 160, 0, 255], framebuffer);
            this.drawVertex(p2, [0, 160, 0, 255], framebuffer);
        }
        
    }

    // center:       object {x: __, y: __}
    // radius:       int
    // num_edges:    int
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawCircle(center, radius, num_edges, color, framebuffer) {
        // TODO: draw a sequence of straight lines to approximate a circle
        let start = {x: center.x + radius, y: center.y};
        if (this.show_points) {
                this.drawVertex(start, [0, 0, 0, 255], framebuffer);
            }

        for (let i = 1; i <= num_edges; i++) {
            let angle = i * 2 * Math.PI / num_edges;
            let x = Math.round(center.x + radius * Math.cos(angle));
            let y = Math.round(center.y + radius * Math.sin(angle));
            let end = {x: x, y: y};

            this.drawLine(start, end, color, framebuffer);
            if (this.show_points) {
                this.drawVertex(end, [0, 0, 0, 255], framebuffer);
            }
            start = end;
        }
        
    }
    
    // vertex_list:  array of object [{x: __, y: __}, {x: __, y: __}, ..., {x: __, y: __}]
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawConvexPolygon(vertex_list, color, framebuffer) {
        // TODO: draw a sequence of triangles to form a convex polygon
        for (let i = 1; i < vertex_list.length - 1; i++) {
            this.drawTriangle(vertex_list[0], vertex_list[i], vertex_list[i + 1], color, framebuffer);
        }
        if (this.show_points) {
            for (let i = 0; i < vertex_list.length; i++) {

                this.drawVertex(vertex_list[i], [0, 0, 0, 255], framebuffer);
            }
        }
        
    }
    
    // v:            object {x: __, y: __}
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawVertex(v, color, framebuffer) {
        // TODO: draw some symbol (e.g. small rectangle, two lines forming an X, ...) centered at position `v`
        this.drawLine({x: v.x - 3, y: v.y - 3}, {x: v.x + 3, y: v.y + 3}, color, framebuffer);
        this.drawLine({x: v.x - 3, y: v.y + 3}, {x: v.x + 3, y: v.y - 3}, color, framebuffer);
    }
    
    /***************************************************************
     ***       Basic Line and Triangle Drawing Routines          ***
     ***       (code provided from in-class activities)          ***
     ***************************************************************/
    pixelIndex(x, y, framebuffer) {
	    return 4 * y * framebuffer.width + 4 * x;
    }
    
    setFramebufferColor(color, x, y, framebuffer) {
	    let p_idx = this.pixelIndex(x, y, framebuffer);
        for (let i = 0; i < 4; i++) {
            framebuffer.data[p_idx + i] = color[i];
        }
    }
    
    swapPoints(a, b) {
        let tmp = {x: a.x, y: a.y};
        a.x = b.x;
        a.y = b.y;
        b.x = tmp.x;
        b.y = tmp.y;
    }

    drawLine(p0, p1, color, framebuffer) {
        if (Math.abs(p1.y - p0.y) <= Math.abs(p1.x - p0.x)) { // |m| <= 1
            if (p0.x < p1.x) {
                this.drawLineLow(p0.x, p0.y, p1.x, p1.y, color, framebuffer);
            }
            else {
                this.drawLineLow(p1.x, p1.y, p0.x, p0.y, color, framebuffer);
            }
        }
        else {                                                // |m| > 1
            if (p0.y < p1.y) {
                this.drawLineHigh(p0.x, p0.y, p1.x, p1.y, color, framebuffer);
            }
            else {
                this.drawLineHigh(p1.x, p1.y, p0.x, p0.y, color, framebuffer);
            }
        }
    }
    
    drawLineLow(x0, y0, x1, y1, color, framebuffer) {
        let A = y1 - y0;
        let B = x0 - x1;
        let iy = 1; // y increment (+1 for positive slope, -1 for negative slop)
        if (A < 0) {
            iy = -1;
            A *= -1;
        }
        let D = 2 * A + B;
        let D0 = 2 * A;
        let D1 = 2 * A + 2 * B;
    
        let y = y0;
        for (let x = x0; x <= x1; x++) {
            this.setFramebufferColor(color, x, y, framebuffer);
            if (D <= 0) {
                D += D0;
            }
            else {
                D += D1;
                y += iy;
            }
        }
    }
    
    drawLineHigh(x0, y0, x1, y1, color, framebuffer) {
        let A = x1 - x0;
        let B = y0 - y1;
        let ix = 1; // x increment (+1 for positive slope, -1 for negative slop)
        if (A < 0) {
            ix = -1;
            A *= -1;
        }
        let D = 2 * A + B;
        let D0 = 2 * A;
        let D1 = 2 * A + 2 * B;
    
        let x = x0;
        for (let y = y0; y <= y1; y++) {
            this.setFramebufferColor(color, x, y, framebuffer);
            if (D <= 0) {
                D += D0;
            }
            else {
                D += D1;
                x += ix;
            }
        }
    }
    
    drawTriangle(p0, p1, p2, color, framebuffer) {
        // Deep copy, then sort points in ascending y order
        p0 = {x: p0.x, y: p0.y};
        p1 = {x: p1.x, y: p1.y};
        p2 = {x: p2.x, y: p2.y};
        if (p1.y < p0.y) this.swapPoints(p0, p1);
        if (p2.y < p0.y) this.swapPoints(p0, p2);
        if (p2.y < p1.y) this.swapPoints(p1, p2);
        
        // Edge coherence triangle algorithm
        // Create initial edge table
        let edge_table = [
            {x: p0.x, inv_slope: (p1.x - p0.x) / (p1.y - p0.y)}, // edge01
            {x: p0.x, inv_slope: (p2.x - p0.x) / (p2.y - p0.y)}, // edge02
            {x: p1.x, inv_slope: (p2.x - p1.x) / (p2.y - p1.y)}  // edge12
        ];
        
        // Do cross product to determine if pt1 is to the right/left of edge02
        let v01 = {x: p1.x - p0.x, y: p1.y - p0.y};
        let v02 = {x: p2.x - p0.x, y: p2.y - p0.y};
        let p1_right = ((v01.x * v02.y) - (v01.y * v02.x)) >= 0;
        
        // Get the left and right edges from the edge table (lower half of triangle)
        let left_edge, right_edge;
        if (p1_right) {
            left_edge = edge_table[1];
            right_edge = edge_table[0];
        }
        else {
            left_edge = edge_table[0];
            right_edge = edge_table[1];
        }
        // Draw horizontal lines (lower half of triangle)
        for (let y = p0.y; y < p1.y; y++) {
            let left_x = parseInt(left_edge.x) + 1;
            let right_x = parseInt(right_edge.x);
            if (left_x <= right_x) { 
                this.drawLine({x: left_x, y: y}, {x: right_x, y: y}, color, framebuffer);
            }
            left_edge.x += left_edge.inv_slope;
            right_edge.x += right_edge.inv_slope;
        }
        
        // Get the left and right edges from the edge table (upper half of triangle) - note only one edge changes
        if (p1_right) {
            right_edge = edge_table[2];
        }
        else {
            left_edge = edge_table[2];
        }
        // Draw horizontal lines (upper half of triangle)
        for (let y = p1.y; y < p2.y; y++) {
            let left_x = parseInt(left_edge.x) + 1;
            let right_x = parseInt(right_edge.x);
            if (left_x <= right_x) {
                this.drawLine({x: left_x, y: y}, {x: right_x, y: y}, color, framebuffer);
            }
            left_edge.x += left_edge.inv_slope;
            right_edge.x += right_edge.inv_slope;
        }
    }
};

export { Renderer };
